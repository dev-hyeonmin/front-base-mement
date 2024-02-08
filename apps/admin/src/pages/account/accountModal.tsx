import { Box, Button, Card, Cell, FormField, Input, Layout, Modal, ModalProps, Radio, SelectorListRecordsProps, TextButton } from "@mement-frontend/ui";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { IBranch } from "../../api/branch/types";
import { IMembers } from "../../api/members/types";
import { IMenu } from "../../api/menu/types";
import MultiSelectorModal from "./multiSelectorModal";

interface IForm extends IMembers {
  branchIds: number[];
  menuIds: number[];
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
  const errorStatus = methods.formState.errors;
  const [branchOptions, setBranchOptions] = useState<SelectorListRecordsProps[]>();
  const [menuOptions, setMenuOptions] = useState<SelectorListRecordsProps[]>();
  const [branchOptionsModalStatus, setBranchOptionsModalStatus] = useState(false);
  const [menuOptionsModalStatus, setMenuOptionsModalStatus] = useState(false);
  const onSubmit = async (data: IForm) => {
    console.log(data);
  };

  const getSelectedIds = () => {
    const values = methods.getValues();
    console.log(values);

    setBranchOptionsModalStatus(false);
    setMenuOptionsModalStatus(false);
  }
  
  useEffect(() => {
    const newBranchesOptions: SelectorListRecordsProps[] = [];
    const newMenusOptions: SelectorListRecordsProps[] = [];

    branches.map(branch => {
      newBranchesOptions.push({
        value: branch.id,
        name: branch.name
      })
    });

    menus.map(menu => {
      newMenusOptions.push({
        value: menu.id,
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
          <Card.Header title="Add account" />
          <Card.SubHeader>
            Please enter the new user information to register.
          </Card.SubHeader>

          <Card.Content>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Layout gap="10px">
                  <Cell>
                    <FormField label="지점선택">
                      <TextButton label="+ 지점선택" skin="primary" size="small" underline="always" onClick={() => setBranchOptionsModalStatus(true)} />
                      {branchOptions &&
                        <MultiSelectorModal
                          title="지점 선택"
                          name="branchIds"
                          isOpen={branchOptionsModalStatus}
                          onRequestClose={() => setBranchOptionsModalStatus(false)}
                          onConfirm={() => getSelectedIds()}
                          data={branchOptions} />
                      }
                    </FormField>
                  </Cell>

                  <Cell>
                    <FormField label="메뉴 권한 설정">
                      <TextButton label="+ 메뉴선택" skin="primary" size="small" underline="always" onClick={() => setMenuOptionsModalStatus(true)} />
                      {menuOptions &&
                        <MultiSelectorModal
                          title="메뉴 선택"
                          name="menuIds"
                          isOpen={menuOptionsModalStatus}
                          onRequestClose={() => setMenuOptionsModalStatus(false)}
                          onConfirm={() => getSelectedIds()}
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

                <Card.Divider />

                <Layout justifyItems="end">
                  <Cell>
                    <Button label="cancel" onClick={onRequestClose} />

                    <Button
                      type="submit"
                      label="submit"
                      className={['ml-3']}
                      skin={methods.formState.isValid ? 'primary' : 'default'}
                      disabled={!methods.formState.isValid}
                    />
                  </Cell>
                </Layout>
              </form>
            </FormProvider>
          </Card.Content>
        </Card>
      </Modal>

      {/* <MessageModalLayout title="test" content="adsfasdf" isOpen={isOpen}/> */}
    </>
  );
}

export default AccountModal;