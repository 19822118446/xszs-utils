# some tools

一个实用的工具库，包含了一些常用的工具函数。

## 安装

```bash
pnpm add @xszs/utils
```

## 使用

```ts
import { chunk, unique } from '@xszs/utils'

const arr = [1, 2, 3, 4, 5]

console.log(chunk(arr, 2)) // [[1, 2], [3, 4], [5]]
console.log(unique(arr)) // [1, 2, 3, 4, 5]
```
