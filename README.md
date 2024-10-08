# TypeScript from Zero

This repository serves as an interactive guide to TypeScript.
It contains written guides in the form of README.md files, as well as code examples in the form of `.ts` files.

## Prerequisites

This course assumes that you have:

- Proficiency with JavaScript (or minimally any other language)

Good to have:

- Some experience with TypeScript
- VS Code installed

## Setup

```sh
npm install # Install ESLint and TypeScript for type-checking in hands-on exercises.
```

We will be using [Visual Studio Code](https://code.visualstudio.com/) with the following extensions:

- [Twoslash Query Comments](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-twoslash-queries) - To show inline type previews
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - To show linting errors
- [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) - To preview markdown files


## Table of Contents

- Basics
  1. [Introduction to TypeScript](./chapters/1-basics/0-introduction-to-typescript/README.md)
  1. [Type annotations](./chapters/1-basics/1-type-annotations/README.md)
  1. [Inferred types](./chapters/1-basics/2-inferred-types/README.md)
  1. [Overriding inferred types](./chapters/1-basics/3-overriding-inferred-types/README.md)
  1. [Type aliases](./chapters/1-basics/4-type-aliases/README.md)
  1. [Object types and interfaces](./chapters/1-basics/5-object-types-and-interfaces/README.md)
  1. [Optional properties and types](./chapters/1-basics/6-optional-properties-and-types/README.md)
  1. [Union and literal types](./chapters/1-basics/7-union-and-literal-types/README.md)
  1. [Type assertions](./chapters/1-basics/8-type-assertions/README.md)
  1. [Type guards](./chapters/1-basics/9-type-guards/README.md)
  1. [Arrays, records and tuples](./chapters/1-basics/10-arrays-records-tuples/README.md)
  1. [Classes](./chapters/1-basics/11-classes/README.md)
  1. [Readonly types as const](./chapters/1-basics/12-readonly-types-as-const/README.md)

- Intermediate
  1. [Unknown vs any](./chapters/2-intermediate-concepts/1-unknown-any/README.md)
  1. [Intersection types](./chapters/2-intermediate-concepts/2-intersection-types/README.md)
  1. [Exclude types using Omit and Exclude](./chapters/2-intermediate-concepts/3-exclude-types-omit-exclude/README.md)
  1. [Null, undefined, void and never](./chapters/2-intermediate-concepts/4-null-undefined-void-never/README.md)
  1. [Variable types and typeof](./chapters/2-intermediate-concepts/5-variable-types-typeof/README.md)
  1. [Variable keys and keyof](./chapters/2-intermediate-concepts/6-variable-keys-keyof/README.md)
  1. [Satisfies keyword](./chapters/2-intermediate-concepts/7-satisfies/README.md)
  1. [As vs type annotations vs satisfies](./chapters/2-intermediate-concepts/8-as-vs-type-annotations-vs-satisfies/README.md)
  1. [Discriminated unions](./chapters/2-intermediate-concepts/9-discriminated-unions/README.md)

- Advanced concepts
  1. [Index types](./chapters/3-advanced-concepts/1-index-types/README.md)
  1. [Function overloading](./chapters/3-advanced-concepts/2-function-overloading/README.md)
  1. [Generic types](./chapters/3-advanced-concepts/3-generic-types/README.md)
  1. [Conditional types](./chapters/3-advanced-concepts/4-conditional-types/README.md)
  1. [Distributive conditional types](./chapters/3-advanced-concepts/5-distributive-conditional-types/README.md)
  1. [Template literal types](./chapters/3-advanced-concepts/6-template-literal-types/README.md)
  1. [Mapped types](./chapters/3-advanced-concepts/7-mapped-types/README.md)
  1. [Infer in conditional types](./chapters/3-advanced-concepts/8-infer-in-conditional-types/README.md)
  1. [Declaration merging](./chapters/3-advanced-concepts/9-declaration-merging/README.md)

## Expectations

### What this course is

- A guide to TypeScript syntax and best practices when using TypeScript in your codebase

### What this course is not

- A guide to setting up TypeScript in your project
- A JavaScript tutorial

## Credits

This set of course materials was prepared by [Jeff Sieu](https://jeffsieu.com). 

Some of the examples and explanations were inspired by the [official TypeScript documentation](https://www.typescriptlang.org/docs/).

## Useful resources

- [TypeScript for JavaScript programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [TypeScript playground](https://www.typescriptlang.org/play)
- [Type Challenges (Interactive website)](https://type-challenges.github.io/)
- [Type Challenges (Github)](https://github.com/type-challenges/type-challenges)
