### 安装，创建项目
- 安装[nodejs](https://nodejs.org/en/download/)
- 安装typescript: `npm install -g typescript`
- 初始化项目：
```
npm init
npx tsc --init

```

- 启动
```
npm i -D nodemon

npx nodemon -w dist dist/index.js

```

### Modules

- export ...

import { ... } from ...

- export default ...

import ... from ...



- export default 同一个module只能存在一个， export可以多个；
- 可以用export ... as ...修改需要的调用名.



