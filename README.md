## npm
1. Install project
    npm create vite@latest [project_name] -- --template react-ts
2. Add workspaces to the root package.json file.
> Install date-fns into package-a

    npm install date-fns --workspace package-a 
> Uninstall lodash from package-b

    npm uninstall lodash --workspace package-b 
> Excute app1 dev mode

    npm run dev --workspace @npm-workspace-demo/app1
    
## Info
- 현재 react 18을 사용중이나 toast react editor가 react 버전 17까지 지원이 되어 설치에 오류가 발생하여 --legacy-peer-deps 옵션으로 설치함.

## Document
- [참고 글](https://earthly.dev/blog/npm-workspaces-monorepo)
    - [Typescript 관련 오류 해결 참고](https://github.com/gxmari007/vite-plugin-eslint/pull/60)
- [React-router-dom](https://reactrouter.com/en/main)
- [React-helmet(SEO)](https://github.com/nfl/react-helmet)
- [i18n](https://react.i18next.com)
- [react-hook-form](https://react-hook-form.com/)
- [axios](https://axios-http.com/kr/docs/intro)
- [query](https://tanstack.com/query/v3/docs/react/overview)
- redux: https://ko.redux.js.org/introduction/getting-started
- storybook: https://storybook.js.org/
- react-responsive (반응형): https://github.com/yocontra/react-responsive
- prettier: https://prettier.io/ (포맷)
- framer motion: https://www.framer.com/motion/ (홈페이지에만 사용)
- 임시 데이터 이용중: https://dummyjson.com/
- type 관련 글: https://techblog.woowahan.com/9804/


## EXE
1. global install serve: npm install -g pm2
2. global install: npm install -g pm2
3. pm2 start ecosystem.config.js || pm2 start npm --name "[package name]" -- run [script]
- show list: pm2 list
- all stop : pm2 kill
- show log : pm2 logs

## Error Code
- 400 :: bad request
- 401 :: [Unauthorized] jwt expired

## Deploy
1. [AWS amplify](https://aws.amazon.com/ko/amplify/hosting/)
2. [S3+Cloudfront](https://velog.io/@igun0423/S3-CloudFront-Github-Action%EC%9C%BC%EB%A1%9C-ReactVite-App-%EB%B0%B0%ED%8F%AC-%EC%9E%90%EB%8F%99%ED%99%94%ED%95%98%EA%B8%B0)