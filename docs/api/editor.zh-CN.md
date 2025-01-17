# 引擎和阅读器共有属性和方法

类型：`EditorInterface`

编辑引擎和阅读器共有属性和方法

## 属性

### `kind`

编辑器类型，编辑引擎或者阅读器

```ts
readonly kind: 'engine' | 'view';
```

### `language`

语言

类型：`LanguageInterface`

### `container`

编辑器节点

类型：`NodeInterface`

### `root`

编辑器根节点，默认为编辑器节点的父节点

类型：`NodeInterface`

### `command`

编辑器命令

类型：`CommandInterface`

### `card`

卡片管理，可以创建卡片、删除、修改、更新等相关操作

类型：`CardModelInterface`

### `plugin`

可以管理所有已实例化的插件实例

类型：`PluginModelInterface`

### `node`

节点管理，包括节点类型判断，在 DOM 树中插入节点

类型：`NodeModelInterface`

### `list`

列表节点管理

类型：`ListModelInterface`

### `mark`

样式节点管理

类型：`MarkModelInterface`

### `inline`

行内节点管理

类型：`InlineModelInterface`

### `block`

块级节点管理

类型：`BlockModelInterface`

### `event`

事件管理

类型：`EventInterface`

### `schema`

元素结构管理

类型：`SchemaInterface`

### `conversion`

元素名称转换规则

类型：`ConversionInterface`

### `clipboard`

剪贴板管理

类型：`ClipboardInterface`

## 方法

### `on`

事件绑定

```ts
/**
 * 绑定事件
 * @param eventType 事件类型
 * @param listener 事件回调
 * @param rewrite 是否重写
 */
on(eventType: string, listener: EventListener, rewrite?: boolean): void;
```

### `off`

移除事件绑定

```ts
/**
 * 移除绑定事件
 * @param eventType 事件类型
 * @param listener 事件回调
 */
off(eventType: string, listener: EventListener): void;
```

### `trigger`

触发事件

```ts
/**
* 触发事件
* @param eventType 事件名称
* @param args 触发参数
*/
trigger(eventType: string, ...args: any): any;
```

### `messageSuccess`

显示成功类的消息，默认在控制台打印消息。可以修改`messageSuccess`方法，使用 UI 显示 `engine.messageSuccess = text => Message.show(text)`

在插件内部或引擎内部都可能会调用此方法弹出讯息

```ts
/**
* 显示成功的信息
* @param message 信息
*/
messageSuccess(message: string): void;
```

### `messageError`

显示错误消息

```ts
/**
 * 显示错误信息
 * @param error 错误信息
 */
messageError(error: string): void;
```

### `messageConfirm`

弹出一个确认提示框，引擎内默认没有 UI 显示，并且始终返回 false。所以需要重新赋值一个有意义的确认提示框功能

例如，使用 antd 的 Modal.confirm 组件

```ts
engine.messageConfirm = (msg: string) => {
	return new Promise<boolean>((resolve, reject) => {
		Modal.confirm({
			content: msg,
			onOk: () => resolve(true),
			onCancel: () => reject(),
		});
	});
};
```

方法签名

```ts
/**
* 消息确认
* @param message 消息
*/
messageConfirm(message: string): Promise<boolean>;
```
