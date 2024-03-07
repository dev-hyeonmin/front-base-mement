import { Box, Button, Card, Cell, FormField, Input, Layout, Modal, ModalProps, Radio, SelectorListRecordsProps, TagList, TagsProps } from "@mement-frontend/ui";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useGetBranches } from "../../api/branch";
import { useGetMembersById, usePostMembers } from "../../api/members/members";
import { IMember } from "../../api/members/types";
import { useGetMenus } from "../../api/menu";
import MultiSelectorModal from "./multiSelectorModal";

interface IForm extends IMember {
  branchIds: string[];
  menuIds: string[];
  password: string;
  password2: string;
}

interface AccountModalProps extends ModalProps {
  selectedId?: number;
}

const AccountModal = ({
  isOpen,
  onRequestClose,
  selectedId
}: AccountModalProps) => {
  const { t } = useTranslation();
  const methods = useForm<IForm>();
  // const errorStatus = methods.formState.errors;

  const getBranches = useGetBranches().data?.data.message;
  const getMenus = useGetMenus().data?.data.message;
  const postMembers = usePostMembers();

  const [branchesModalStatus, setBranchesModalStatus] = useState(false);
  const [branches, setBranches] = useState<SelectorListRecordsProps[]>();
  const [branchesTags, setBranchesTags] = useState<TagsProps[]>();

  const [menusModalStatus, setMenusModalStatus] = useState(false);
  const [menus, setMenus] = useState<SelectorListRecordsProps[]>();
  const [menusTags, setMenusTags] = useState<TagsProps[]>();

  const onSubmit = async (data: IForm) => {
    const params = {
      ...data,
      branchIds: methods.getValues('branchIds').map(Number),
      menuIds: methods.getValues('menuIds').map(Number),
    };

    const result = await postMembers.mutateAsync(params);
    if (result.data.result) {
      alert('등록되었습니다.');
      onRequestClose && onRequestClose();
    }
  };

  /**
   * Branch Option
   */
  const openBranchOptionModal = () => {
    setSelectedBranch();
    setBranchesModalStatus(true);
  }

  const confirmBranchOptionModal = () => {
    const values = methods.getValues('branchIds');
    const filterData = branches?.filter(branch => values.includes(String(branch.value)));
    setBranchesTags(filterData);

    setBranchesModalStatus(false);
  }

  const setSelectedBranch = () => {
    const filterData = branchesTags?.map(branch => String(branch.value));
    if (filterData) {
      methods.setValue('branchIds', filterData);
    }
  }

  const removeBranchTag = (tagId: number | string) => {
    const tags = branchesTags?.filter(({ value }) => value !== tagId);
    setBranchesTags(tags);
  };


  /**
   * Menu Option
   */
  const openMenusModal = () => {
    setSelectedMenu();
    setMenusModalStatus(true);
  }

  const confirmMenusModal = () => {
    const values = methods.getValues('menuIds');
    const filterData = menus?.filter(menu => values.includes(String(menu.value)));
    setMenusTags(filterData);

    setMenusModalStatus(false);
  }

  const setSelectedMenu = () => {
    const filterData = menusTags?.map(menu => String(menu.value));
    if (filterData) {
      methods.setValue('menuIds', filterData);
    }
  }

  const removeMenuTag = (tagId: number | string) => {
    const tags = menusTags?.filter(({ value }) => value !== tagId);
    setMenusTags(tags);
  };

  useEffect(() => {
    if (getBranches) {
      const newBranches: SelectorListRecordsProps[] = [];

      getBranches.map(branch => {
        newBranches.push({
          value: branch.id,
          name: branch.name,
        })
      });

      setBranches(newBranches);
    }
  }, [getBranches]);

  useEffect(() => {
    if (getMenus) {
      const newMenus: SelectorListRecordsProps[] = [];

      getMenus.map(menu => {
        newMenus.push({
          value: menu.id,
          name: menu.title
        })
      });

      setMenus(newMenus);
    }
  }, [getMenus]);

  async function getMembersById() {
    if (selectedId) {
      const response = await Promise.resolve(useGetMembersById(selectedId));
      return response;
    }
  }

  useEffect(() => {
    console.log(selectedId);
    if (!selectedId) {
      methods.reset();
      return;
    }

    getMembersById().then((value) => {
      const member = value?.data.message;

      if (member) {
        methods.setValue('id', member.id);
        methods.setValue('loginId', member.loginId);
        methods.setValue('username', member.username);
      }
    });
  }, [selectedId]);

  return (
    <>
      <Modal
        isOpen={isOpen}
      >
        <Card width="500px">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Card.Header title="Add account" />
              <Card.SubHeader>
                Please enter the new user information to register.
              </Card.SubHeader>

              <Card.Content>
                <Layout gap="10px">
                  <Cell>
                    <FormField label="지점선택">
                      <TagList
                        tags={branchesTags}
                        actionButton={{ label: '지점추가', onClick: () => openBranchOptionModal() }}
                        onTagRemove={removeBranchTag}
                      />

                      {branches &&
                        <MultiSelectorModal
                          title="지점 선택"
                          name="branchIds"
                          data={branches}
                          isOpen={branchesModalStatus}
                          onRequestClose={() => setBranchesModalStatus(false)}
                          onConfirm={() => confirmBranchOptionModal()} />
                      }
                    </FormField>
                  </Cell>

                  <Cell>
                    <FormField label="메뉴 권한 설정">
                      <TagList
                        tags={menusTags}
                        actionButton={{ label: '메뉴추가', onClick: () => openMenusModal() }}
                        onTagRemove={removeMenuTag}
                      />

                      {menus &&
                        <MultiSelectorModal
                          title="메뉴 선택"
                          name="menuIds"
                          isOpen={menusModalStatus}
                          onRequestClose={() => setMenusModalStatus(false)}
                          onConfirm={() => confirmMenusModal()}
                          data={menus} />
                      }
                    </FormField>
                  </Cell>

                  <Cell span={6}>
                    <FormField label="loginId" required>
                      <Input
                        value="loginId"
                        registerOption={{ required: 'please enter user userId' }}
                      />
                    </FormField>
                  </Cell>

                  <Cell span={6}>
                    <FormField label="username" required>
                      <Input
                        value="username"
                        registerOption={{ required: 'please enter user name' }}
                      />
                    </FormField>
                  </Cell>

                  <Cell>
                    <FormField label="password" infoContent="8자 이상, 대문자, 숫자, 특수문자 포함." required>
                      <Input
                        type="password"
                        value="password"
                        registerOption={{ required: 'please enter user password' }}
                      />
                    </FormField>
                  </Cell>

                  <Cell>
                    <FormField label="check password" required>
                      <Input
                        type="password"
                        value="password2"
                      />
                    </FormField>
                  </Cell>

                  <Cell>
                    <Box gap="30px">
                      <FormField label="역할 설정" required>
                        <Box gap="15px">
                        <Radio name="role" value="admin" label="admin" />
                        <Radio name="role" value="branch" label="branch" />
                        </Box>
                      </FormField>
                    </Box>
                  </Cell>
                </Layout>
              </Card.Content>

              <Card.Footer align="right">
                <Button label="cancel" onClick={onRequestClose} />

                <Button
                  type="submit"
                  label="submit"
                  className={['ml-3']}
                  skin={methods.formState.isValid ? 'primary' : 'default'}
                  priority="primary"
                  disabled={!methods.formState.isValid}
                />
              </Card.Footer>
            </form>
          </FormProvider>
        </Card>
      </Modal>
    </>
  );
}

export default AccountModal;