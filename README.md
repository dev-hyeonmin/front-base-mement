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
3. pm2 start ecosystem.config.js
- show list: pm2 list
- all stop : pm2 kill
- show log : pm2 logs



### memo
1. components/card