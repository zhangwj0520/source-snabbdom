export interface DOMAPI {
  createElement: (tagName: any, options?: ElementCreationOptions) => HTMLElement
  createElementNS: (
    namespaceURI: string,
    qualifiedName: string,
    options?: ElementCreationOptions
  ) => Element
  createTextNode: (text: string) => Text
  createComment: (text: string) => Comment
  insertBefore: (parentNode: Node, newNode: Node, referenceNode: Node | null) => void
  removeChild: (node: Node, child: Node) => void
  appendChild: (node: Node, child: Node) => void
  parentNode: (node: Node) => Node | null
  nextSibling: (node: Node) => Node | null
  tagName: (elm: Element) => string
  setTextContent: (node: Node, text: string | null) => void
  getTextContent: (node: Node) => string | null
  isElement: (node: Node) => node is Element
  isText: (node: Node) => node is Text
  isComment: (node: Node) => node is Comment
}

function createElement(tagName: any, options?: ElementCreationOptions): HTMLElement {
  return document.createElement(tagName, options)
}

function createElementNS(
  namespaceURI: string,
  qualifiedName: string,
  options?: ElementCreationOptions
): Element {
  return document.createElementNS(namespaceURI, qualifiedName, options)
}

function createTextNode(text: string): Text {
  return document.createTextNode(text)
}

function createComment(text: string): Comment {
  return document.createComment(text)
}

function insertBefore(parentNode: Node, newNode: Node, referenceNode: Node | null): void {
  //方法在参考节点之前插入一个拥有指定父节点的子节点。
  //如果给定的子节点是对文档中现有节点的引用，insertBefore() 会将其从当前位置移动到新位置
  //（在将节点附加到其他节点之前，不需要从其父节点删除该节点）
  //如果 referenceNode 为 null 则 newNode 将被插入到子节点的末尾。
  parentNode.insertBefore(newNode, referenceNode)
}

function removeChild(node: Node, child: Node): void {
  node.removeChild(child)
}

function appendChild(node: Node, child: Node): void {
  node.appendChild(child)
}

function parentNode(node: Node): Node | null {
  return node.parentNode
}

function nextSibling(node: Node): Node | null {
  return node.nextSibling
}

function tagName(elm: Element): string {
  return elm.tagName
}

function setTextContent(node: Node, text: string | null): void {
  node.textContent = text
}

function getTextContent(node: Node): string | null {
  return node.textContent
}

function isElement(node: Node): node is Element {
  return node.nodeType === 1
}

function isText(node: Node): node is Text {
  return node.nodeType === 3
}

function isComment(node: Node): node is Comment {
  return node.nodeType === 8
}

export const htmlDomApi: DOMAPI = {
  createElement,
  createElementNS,
  createTextNode,
  createComment,
  insertBefore,
  removeChild,
  appendChild,
  parentNode,
  nextSibling,
  tagName,
  setTextContent,
  getTextContent,
  isElement,
  isText,
  isComment,
}
