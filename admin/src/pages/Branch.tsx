import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { getBranchInfo } from "../api/branch";
import { TBranch } from "../types/branch";
import { TResponse } from "../types/types";

interface IForm {
  name: string;
  nameEng: string;
  address?: string;
  callNumber?: string;
  kakaoID?: string;
  lineID?: string;
  weChatID?: string;
}

export default function Branch() {
  const branchPk = localStorage.getItem('branchId');
  const { isLoading, data } = useQuery<TResponse<TBranch>>([`branch`, branchPk], getBranchInfo);
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<IForm>({ reValidateMode: "onSubmit" });

  return (
    <div className="wrapper">
      <h1>지점 관리</h1>

      <div className="content-wrapper">
        <div className="form-box">
          <div className="form-title">지점 관리 상세 설정</div>

          <div className="form-content">
            <form autoComplete="off">
              <dl>
                <dt>
                  지점명
                  <span>
                    사이트에 표시되는 지점 명칭입니다.
                  </span>
                </dt>
                <dd>
                  <input
                    type="text"
                    disabled={true}
                    {...register("name", { required: true })} />
                    <span>
                      변경할 수 없는 값입니다. 변경 원할 시 담당자에게 연락 바랍니다.
                    </span>
                </dd>
              </dl>

              <dl>
                <dt>
                  지점 영문명
                  <span>
                    사이트 표기와 URL주소로 사용되는 지점 영문 명칭입니다.
                  </span>
                </dt>
                <dd>
                  <input
                    type="text"
                    disabled={true}
                    {...register("nameEng")} />
                    <span>
                      변경할 수 없는 값입니다. 변경 원할 시 담당자에게 연락 바랍니다.
                    </span>
                </dd>
              </dl>

              <dl>
                <dt>주소</dt>
                <dd>
                  <input
                    type="text"
                    {...register("address")} />
                </dd>
              </dl>

              <dl>
                <dt>전화번호</dt>
                <dd>
                  <input
                    type="text"
                    {...register("callNumber")} />
                </dd>
              </dl>

              <dl>
                <dt>Kakao ID</dt>
                <dd>
                  <input
                    type="text"
                    {...register("kakaoID")} />
                </dd>
              </dl>

              <dl>
                <dt>
                  Line ID
                  <span>
                    일본어 사이트의 상담과 연결되는 부분입니다. 값이 없을 시 카카오로 연결됩니다.
                  </span>
                </dt>
                <dd>
                  <input
                    type="text"
                    {...register("lineID")} />
                </dd>
              </dl>

              <dl>
                <dt>
                  WeChat ID
                  <span>
                    중국어 사이트의 상담과 연결되는 부분입니다. 값이 없을 시 카카오로 연결됩니다.
                  </span>
                </dt>
                <dd>
                  <input
                    type="text"
                    {...register("weChatID")} />
                </dd>
              </dl>

              <div className="form-bottom">
                <button className="btn-save">저장</button>
                <button>취소</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
