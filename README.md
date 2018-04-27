##### 课前的练习
1. vscode 首选项--设置--用户设置
```
<!-- 接受的值: "off"、"afterDelay"、"onFocusChange" (编辑器失去焦点)、"onWindowChange" (窗口失去焦点)。 -->
<!-- 在右侧的设置中的JSON中添加： -->
"files.autoSave": "off",
```
2. 这个工程中有两个子工程，其中VueJTodo是高级Vue课程，而VueSimpleJTodo是简易的实现课程。
3. vue-cli中的static和src/assets的区别：
static/目录下的文件并不会被webpack处理: 他们会直接被复制到最终的打包目录(默认是dist/static)下。
```
<link rel="stylesheet" href="static/css/reset.css">
```
