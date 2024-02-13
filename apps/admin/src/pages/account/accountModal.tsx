import { Box, Button, Card, Cell, FormField, Input, Layout, Modal, ModalProps, Radio, SelectorListRecordsProps, TagList, TagsProps } from "@mement-frontend/ui";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { IBranch } from "../../api/branch/types";
import { usePostMembers } from "../../api/members/members";
import { IMembers } from "../../api/members/types";
import { IMenu } from "../../api/menu/types";
import MultiSelectorModal from "./multiSelectorModal";

interface IForm extends IMembers {
  branchIds: string[];
  menuIds: string[];
  password: string;
  password2: string;
}

interface AccountModalProps extends ModalProps {
  data?: any;
  branches: IBranch[];
  menus: IMenu[];
}

const AccountModal = ({
  isOpen,
  onRequestClose,
  data,
  branches,
  menus
}: AccountModalProps) => {
  const { t } = useTranslation();
  const methods = useForm<IForm>();
  const postMembers = usePostMembers();
  const errorStatus = methods.formState.errors;
  const [branchOptions, setBranchOptions] = useState<SelectorListRecordsProps[]>();
  const [menuOptions, setMenuOptions] = useState<SelectorListRecordsProps[]>();
  const [selectedBranchList, setSelectedBranchList] = useState<TagsProps[]>();
  const [selectedMenuList, setSelectedMenuList] = useState<TagsProps[]>();
  const [branchOptionsModalStatus, setBranchOptionsModalStatus] = useState(false);
  const [menuOptionsModalStatus, setMenuOptionsModalStatus] = useState(false);
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
    setBranchOptionsModalStatus(true);
  }

  const confirmBranchOptionModal = () => {
    const values = methods.getValues('branchIds');
    const filterData = branchOptions?.filter(branch => values.includes(String(branch.value)));
    setSelectedBranchList(filterData);

    setBranchOptionsModalStatus(false);
  }

  const setSelectedBranch = () => {
    const filterData = selectedBranchList?.map(selectedBranch => String(selectedBranch.value));
    if (filterData) {
      methods.setValue('branchIds', filterData);
    }
  }

  const removeBranchTag = (tagId: number | string) => {
    const tags = selectedBranchList?.filter(({ value }) => value !== tagId);
    setSelectedBranchList(tags);
  };


  /**
   * Menu Option
   */
  const openMenuOptionModal = () => {
    setSelectedMenu();
    setMenuOptionsModalStatus(true);
  }

  const confirmMenuOptionModal = () => {
    const values = methods.getValues('menuIds');
    const filterData = menuOptions?.filter(menu => values.includes(String(menu.value)));
    setSelectedMenuList(filterData);

    setMenuOptionsModalStatus(false);
  }

  const setSelectedMenu = () => {
    const filterData = selectedMenuList?.map(selectedMenu => String(selectedMenu.value));
    if (filterData) {
      methods.setValue('menuIds', filterData);
    }
  }

  const removeMenuTag = (tagId: number | string) => {
    const tags = selectedMenuList?.filter(({ value }) => value !== tagId);
    setSelectedMenuList(tags);
  };

  useEffect(() => {
    const newBranchesOptions: SelectorListRecordsProps[] = [];
    const newMenusOptions: SelectorListRecordsProps[] = [];

    branches.map(branch => {
      newBranchesOptions.push({
        value: Number(branch.id),
        name: branch.name,
      })
    });

    menus.map(menu => {
      newMenusOptions.push({
        value: Number(menu.id),
        name: menu.title
      })
    });

    setBranchOptions(newBranchesOptions);
    setMenuOptions(newMenusOptions);
  }, []);

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
                        tags={selectedBranchList}
                        actionButton={{ label: '지점추가', onClick: () => openBranchOptionModal() }}
                        onTagRemove={removeBranchTag}
                      />

                      {branchOptions &&
                        <MultiSelectorModal
                          title="지점 선택"
                          name="branchIds"
                          isOpen={branchOptionsModalStatus}
                          onRequestClose={() => setBranchOptionsModalStatus(false)}
                          onConfirm={() => confirmBranchOptionModal()}
                          data={branchOptions} />
                      }
                    </FormField>
                  </Cell>

                  <Cell>
                    <FormField label="메뉴 권한 설정">
                      <TagList
                        tags={selectedMenuList}
                        actionButton={{ label: '지점추가', onClick: () => openMenuOptionModal() }}
                        onTagRemove={removeMenuTag}
                      />

                      {menuOptions &&
                        <MultiSelectorModal
                          title="메뉴 선택"
                          name="menuIds"
                          isOpen={menuOptionsModalStatus}
                          onRequestClose={() => setMenuOptionsModalStatus(false)}
                          onConfirm={() => confirmMenuOptionModal()}
                          data={menuOptions} />
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
                      <Radio name="role" value="admin" label="admin" />
                      <Radio name="role" value="branch" label="branch" />
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

      {/* <MessageModalLayout title="test" content="adsfasdf" isOpen={isOpen}/> */}
    </>
  );
}

export default AccountModal;