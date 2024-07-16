<p align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">SLATE</h1>
</p>
<p align="center">
    <em><code>► INSERT-TEXT-HERE</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/ethan05d/slate?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/ethan05d/slate?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/ethan05d/slate?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/ethan05d/slate?style=default&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>

<br><!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary><br>

- [ Overview](#-overview)
- [ Features](#-features)
- [ Repository Structure](#-repository-structure)
- [ Modules](#-modules)
- [ Getting Started](#-getting-started)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Tests](#-tests)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)
</details>
<hr>

##  Overview

<code>► INSERT-TEXT-HERE</code>

---

##  Features

<code>► INSERT-TEXT-HERE</code>

---

##  Repository Structure

```sh
└── slate/
    ├── README.md
    ├── app
    │   ├── (dashboard)
    │   ├── api
    │   ├── board
    │   ├── favicon.ico
    │   ├── globals.css
    │   └── layout.tsx
    ├── components
    │   ├── actions.tsx
    │   ├── auth
    │   ├── confirm-modal.tsx
    │   ├── hint.tsx
    │   ├── modals
    │   ├── room.tsx
    │   └── ui
    ├── components.json
    ├── convex
    │   ├── README.md
    │   ├── _generated
    │   ├── auth.config.ts
    │   ├── board.ts
    │   ├── boards.ts
    │   ├── schema.ts
    │   └── tsconfig.json
    ├── hooks
    │   ├── use-api-mutation.tsx
    │   ├── use-delete-layers.ts
    │   ├── use-disable-scroll-bounce.ts
    │   └── use-selection-bounds.ts
    ├── lib
    │   └── utils.ts
    ├── liveblocks.config.ts
    ├── middleware.ts
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── providers
    │   ├── convex-client-provider.tsx
    │   └── modal-provider.tsx
    ├── public
    │   ├── elements.svg
    │   ├── empty-favorites.svg
    │   ├── empty-search.svg
    │   ├── logo.svg
    │   ├── next.svg
    │   ├── note.svg
    │   ├── placeholders
    │   └── vercel.svg
    ├── store
    │   └── use-rename-modal.ts
    ├── tailwind.config.ts
    ├── tsconfig.json
    └── types
        └── canvas.ts
```

---

##  Modules

<details closed><summary>.</summary>

| File                                                                                       | Summary                         |
| ---                                                                                        | ---                             |
| [postcss.config.mjs](https://github.com/ethan05d/slate/blob/master/postcss.config.mjs)     | <code>► INSERT-TEXT-HERE</code> |
| [components.json](https://github.com/ethan05d/slate/blob/master/components.json)           | <code>► INSERT-TEXT-HERE</code> |
| [tsconfig.json](https://github.com/ethan05d/slate/blob/master/tsconfig.json)               | <code>► INSERT-TEXT-HERE</code> |
| [liveblocks.config.ts](https://github.com/ethan05d/slate/blob/master/liveblocks.config.ts) | <code>► INSERT-TEXT-HERE</code> |
| [middleware.ts](https://github.com/ethan05d/slate/blob/master/middleware.ts)               | <code>► INSERT-TEXT-HERE</code> |
| [package-lock.json](https://github.com/ethan05d/slate/blob/master/package-lock.json)       | <code>► INSERT-TEXT-HERE</code> |
| [package.json](https://github.com/ethan05d/slate/blob/master/package.json)                 | <code>► INSERT-TEXT-HERE</code> |
| [next.config.mjs](https://github.com/ethan05d/slate/blob/master/next.config.mjs)           | <code>► INSERT-TEXT-HERE</code> |
| [tailwind.config.ts](https://github.com/ethan05d/slate/blob/master/tailwind.config.ts)     | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>lib</summary>

| File                                                                   | Summary                         |
| ---                                                                    | ---                             |
| [utils.ts](https://github.com/ethan05d/slate/blob/master/lib/utils.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>components</summary>

| File                                                                                            | Summary                         |
| ---                                                                                             | ---                             |
| [hint.tsx](https://github.com/ethan05d/slate/blob/master/components/hint.tsx)                   | <code>► INSERT-TEXT-HERE</code> |
| [confirm-modal.tsx](https://github.com/ethan05d/slate/blob/master/components/confirm-modal.tsx) | <code>► INSERT-TEXT-HERE</code> |
| [room.tsx](https://github.com/ethan05d/slate/blob/master/components/room.tsx)                   | <code>► INSERT-TEXT-HERE</code> |
| [actions.tsx](https://github.com/ethan05d/slate/blob/master/components/actions.tsx)             | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>components.modals</summary>

| File                                                                                                 | Summary                         |
| ---                                                                                                  | ---                             |
| [rename-modal.tsx](https://github.com/ethan05d/slate/blob/master/components/modals/rename-modal.tsx) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>components.auth</summary>

| File                                                                                     | Summary                         |
| ---                                                                                      | ---                             |
| [loading.tsx](https://github.com/ethan05d/slate/blob/master/components/auth/loading.tsx) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>components.ui</summary>

| File                                                                                               | Summary                         |
| ---                                                                                                | ---                             |
| [skeleton.tsx](https://github.com/ethan05d/slate/blob/master/components/ui/skeleton.tsx)           | <code>► INSERT-TEXT-HERE</code> |
| [dropdown-menu.tsx](https://github.com/ethan05d/slate/blob/master/components/ui/dropdown-menu.tsx) | <code>► INSERT-TEXT-HERE</code> |
| [sonner.tsx](https://github.com/ethan05d/slate/blob/master/components/ui/sonner.tsx)               | <code>► INSERT-TEXT-HERE</code> |
| [dialog.tsx](https://github.com/ethan05d/slate/blob/master/components/ui/dialog.tsx)               | <code>► INSERT-TEXT-HERE</code> |
| [button.tsx](https://github.com/ethan05d/slate/blob/master/components/ui/button.tsx)               | <code>► INSERT-TEXT-HERE</code> |
| [input.tsx](https://github.com/ethan05d/slate/blob/master/components/ui/input.tsx)                 | <code>► INSERT-TEXT-HERE</code> |
| [alert-dialog.tsx](https://github.com/ethan05d/slate/blob/master/components/ui/alert-dialog.tsx)   | <code>► INSERT-TEXT-HERE</code> |
| [tooltip.tsx](https://github.com/ethan05d/slate/blob/master/components/ui/tooltip.tsx)             | <code>► INSERT-TEXT-HERE</code> |
| [avatar.tsx](https://github.com/ethan05d/slate/blob/master/components/ui/avatar.tsx)               | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>app</summary>

| File                                                                         | Summary                         |
| ---                                                                          | ---                             |
| [layout.tsx](https://github.com/ethan05d/slate/blob/master/app/layout.tsx)   | <code>► INSERT-TEXT-HERE</code> |
| [globals.css](https://github.com/ethan05d/slate/blob/master/app/globals.css) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>app.api.liveblocks-auth</summary>

| File                                                                                       | Summary                         |
| ---                                                                                        | ---                             |
| [route.ts](https://github.com/ethan05d/slate/blob/master/app/api/liveblocks-auth/route.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>app.(dashboard)</summary>

| File                                                                                   | Summary                         |
| ---                                                                                    | ---                             |
| [layout.tsx](https://github.com/ethan05d/slate/blob/master/app/(dashboard)/layout.tsx) | <code>► INSERT-TEXT-HERE</code> |
| [page.tsx](https://github.com/ethan05d/slate/blob/master/app/(dashboard)/page.tsx)     | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>app.(dashboard)._components</summary>

| File                                                                                                                   | Summary                         |
| ---                                                                                                                    | ---                             |
| [empty-org.tsx](https://github.com/ethan05d/slate/blob/master/app/(dashboard)/_components/empty-org.tsx)               | <code>► INSERT-TEXT-HERE</code> |
| [empty-page.tsx](https://github.com/ethan05d/slate/blob/master/app/(dashboard)/_components/empty-page.tsx)             | <code>► INSERT-TEXT-HERE</code> |
| [org-sidebar.tsx](https://github.com/ethan05d/slate/blob/master/app/(dashboard)/_components/org-sidebar.tsx)           | <code>► INSERT-TEXT-HERE</code> |
| [navbar.tsx](https://github.com/ethan05d/slate/blob/master/app/(dashboard)/_components/navbar.tsx)                     | <code>► INSERT-TEXT-HERE</code> |
| [new-board-button.tsx](https://github.com/ethan05d/slate/blob/master/app/(dashboard)/_components/new-board-button.tsx) | <code>► INSERT-TEXT-HERE</code> |
| [search-input.tsx](https://github.com/ethan05d/slate/blob/master/app/(dashboard)/_components/search-input.tsx)         | <code>► INSERT-TEXT-HERE</code> |
| [empty-boards.tsx](https://github.com/ethan05d/slate/blob/master/app/(dashboard)/_components/empty-boards.tsx)         | <code>► INSERT-TEXT-HERE</code> |
| [invite-button.tsx](https://github.com/ethan05d/slate/blob/master/app/(dashboard)/_components/invite-button.tsx)       | <code>► INSERT-TEXT-HERE</code> |
| [board-list.tsx](https://github.com/ethan05d/slate/blob/master/app/(dashboard)/_components/board-list.tsx)             | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>app.(dashboard)._components.sidebar</summary>

| File                                                                                                               | Summary                         |
| ---                                                                                                                | ---                             |
| [item.tsx](https://github.com/ethan05d/slate/blob/master/app/(dashboard)/_components/sidebar/item.tsx)             | <code>► INSERT-TEXT-HERE</code> |
| [list.tsx](https://github.com/ethan05d/slate/blob/master/app/(dashboard)/_components/sidebar/list.tsx)             | <code>► INSERT-TEXT-HERE</code> |
| [new-button.tsx](https://github.com/ethan05d/slate/blob/master/app/(dashboard)/_components/sidebar/new-button.tsx) | <code>► INSERT-TEXT-HERE</code> |
| [index.tsx](https://github.com/ethan05d/slate/blob/master/app/(dashboard)/_components/sidebar/index.tsx)           | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>app.(dashboard)._components.board-card</summary>

| File                                                                                                            | Summary                         |
| ---                                                                                                             | ---                             |
| [footer.tsx](https://github.com/ethan05d/slate/blob/master/app/(dashboard)/_components/board-card/footer.tsx)   | <code>► INSERT-TEXT-HERE</code> |
| [overlay.tsx](https://github.com/ethan05d/slate/blob/master/app/(dashboard)/_components/board-card/overlay.tsx) | <code>► INSERT-TEXT-HERE</code> |
| [index.tsx](https://github.com/ethan05d/slate/blob/master/app/(dashboard)/_components/board-card/index.tsx)     | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>app.board.[boardId]</summary>

| File                                                                                   | Summary                         |
| ---                                                                                    | ---                             |
| [page.tsx](https://github.com/ethan05d/slate/blob/master/app/board/[boardId]/page.tsx) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>app.board.[boardId]._components</summary>

| File                                                                                                                       | Summary                         |
| ---                                                                                                                        | ---                             |
| [tool-button.tsx](https://github.com/ethan05d/slate/blob/master/app/board/[boardId]/_components/tool-button.tsx)           | <code>► INSERT-TEXT-HERE</code> |
| [cursors-presence.tsx](https://github.com/ethan05d/slate/blob/master/app/board/[boardId]/_components/cursors-presence.tsx) | <code>► INSERT-TEXT-HERE</code> |
| [text.tsx](https://github.com/ethan05d/slate/blob/master/app/board/[boardId]/_components/text.tsx)                         | <code>► INSERT-TEXT-HERE</code> |
| [user-avatar.tsx](https://github.com/ethan05d/slate/blob/master/app/board/[boardId]/_components/user-avatar.tsx)           | <code>► INSERT-TEXT-HERE</code> |
| [loading.tsx](https://github.com/ethan05d/slate/blob/master/app/board/[boardId]/_components/loading.tsx)                   | <code>► INSERT-TEXT-HERE</code> |
| [toolbar.tsx](https://github.com/ethan05d/slate/blob/master/app/board/[boardId]/_components/toolbar.tsx)                   | <code>► INSERT-TEXT-HERE</code> |
| [participants.tsx](https://github.com/ethan05d/slate/blob/master/app/board/[boardId]/_components/participants.tsx)         | <code>► INSERT-TEXT-HERE</code> |
| [selection-box.tsx](https://github.com/ethan05d/slate/blob/master/app/board/[boardId]/_components/selection-box.tsx)       | <code>► INSERT-TEXT-HERE</code> |
| [note.tsx](https://github.com/ethan05d/slate/blob/master/app/board/[boardId]/_components/note.tsx)                         | <code>► INSERT-TEXT-HERE</code> |
| [info.tsx](https://github.com/ethan05d/slate/blob/master/app/board/[boardId]/_components/info.tsx)                         | <code>► INSERT-TEXT-HERE</code> |
| [selection-tools.tsx](https://github.com/ethan05d/slate/blob/master/app/board/[boardId]/_components/selection-tools.tsx)   | <code>► INSERT-TEXT-HERE</code> |
| [canvas.tsx](https://github.com/ethan05d/slate/blob/master/app/board/[boardId]/_components/canvas.tsx)                     | <code>► INSERT-TEXT-HERE</code> |
| [rectangle.tsx](https://github.com/ethan05d/slate/blob/master/app/board/[boardId]/_components/rectangle.tsx)               | <code>► INSERT-TEXT-HERE</code> |
| [cursor.tsx](https://github.com/ethan05d/slate/blob/master/app/board/[boardId]/_components/cursor.tsx)                     | <code>► INSERT-TEXT-HERE</code> |
| [path.tsx](https://github.com/ethan05d/slate/blob/master/app/board/[boardId]/_components/path.tsx)                         | <code>► INSERT-TEXT-HERE</code> |
| [ellipse.tsx](https://github.com/ethan05d/slate/blob/master/app/board/[boardId]/_components/ellipse.tsx)                   | <code>► INSERT-TEXT-HERE</code> |
| [layer-preview.tsx](https://github.com/ethan05d/slate/blob/master/app/board/[boardId]/_components/layer-preview.tsx)       | <code>► INSERT-TEXT-HERE</code> |
| [color-picker.tsx](https://github.com/ethan05d/slate/blob/master/app/board/[boardId]/_components/color-picker.tsx)         | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>providers</summary>

| File                                                                                                             | Summary                         |
| ---                                                                                                              | ---                             |
| [modal-provider.tsx](https://github.com/ethan05d/slate/blob/master/providers/modal-provider.tsx)                 | <code>► INSERT-TEXT-HERE</code> |
| [convex-client-provider.tsx](https://github.com/ethan05d/slate/blob/master/providers/convex-client-provider.tsx) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>types</summary>

| File                                                                       | Summary                         |
| ---                                                                        | ---                             |
| [canvas.ts](https://github.com/ethan05d/slate/blob/master/types/canvas.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>convex</summary>

| File                                                                                  | Summary                         |
| ---                                                                                   | ---                             |
| [tsconfig.json](https://github.com/ethan05d/slate/blob/master/convex/tsconfig.json)   | <code>► INSERT-TEXT-HERE</code> |
| [schema.ts](https://github.com/ethan05d/slate/blob/master/convex/schema.ts)           | <code>► INSERT-TEXT-HERE</code> |
| [auth.config.ts](https://github.com/ethan05d/slate/blob/master/convex/auth.config.ts) | <code>► INSERT-TEXT-HERE</code> |
| [board.ts](https://github.com/ethan05d/slate/blob/master/convex/board.ts)             | <code>► INSERT-TEXT-HERE</code> |
| [boards.ts](https://github.com/ethan05d/slate/blob/master/convex/boards.ts)           | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>convex._generated</summary>

| File                                                                                             | Summary                         |
| ---                                                                                              | ---                             |
| [server.d.ts](https://github.com/ethan05d/slate/blob/master/convex/_generated/server.d.ts)       | <code>► INSERT-TEXT-HERE</code> |
| [dataModel.d.ts](https://github.com/ethan05d/slate/blob/master/convex/_generated/dataModel.d.ts) | <code>► INSERT-TEXT-HERE</code> |
| [api.js](https://github.com/ethan05d/slate/blob/master/convex/_generated/api.js)                 | <code>► INSERT-TEXT-HERE</code> |
| [server.js](https://github.com/ethan05d/slate/blob/master/convex/_generated/server.js)           | <code>► INSERT-TEXT-HERE</code> |
| [api.d.ts](https://github.com/ethan05d/slate/blob/master/convex/_generated/api.d.ts)             | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>store</summary>

| File                                                                                           | Summary                         |
| ---                                                                                            | ---                             |
| [use-rename-modal.ts](https://github.com/ethan05d/slate/blob/master/store/use-rename-modal.ts) | <code>► INSERT-TEXT-HERE</code> |

</details>

<details closed><summary>hooks</summary>

| File                                                                                                             | Summary                         |
| ---                                                                                                              | ---                             |
| [use-selection-bounds.ts](https://github.com/ethan05d/slate/blob/master/hooks/use-selection-bounds.ts)           | <code>► INSERT-TEXT-HERE</code> |
| [use-api-mutation.tsx](https://github.com/ethan05d/slate/blob/master/hooks/use-api-mutation.tsx)                 | <code>► INSERT-TEXT-HERE</code> |
| [use-disable-scroll-bounce.ts](https://github.com/ethan05d/slate/blob/master/hooks/use-disable-scroll-bounce.ts) | <code>► INSERT-TEXT-HERE</code> |
| [use-delete-layers.ts](https://github.com/ethan05d/slate/blob/master/hooks/use-delete-layers.ts)                 | <code>► INSERT-TEXT-HERE</code> |

</details>

---

##  Getting Started

**System Requirements:**

* **TypeScript**: `version x.y.z`

###  Installation

<h4>From <code>source</code></h4>

> 1. Clone the slate repository:
>
> ```console
> $ git clone https://github.com/ethan05d/slate
> ```
>
> 2. Change to the project directory:
> ```console
> $ cd slate
> ```
>
> 3. Install the dependencies:
> ```console
> $ npm install
> ```

###  Usage

<h4>From <code>source</code></h4>

> Run slate using the command below:
> ```console
> $ npm run build && node dist/main.js
> ```

###  Tests

> Run the test suite using the command below:
> ```console
> $ npm test
> ```

---

##  Project Roadmap

- [X] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/ethan05d/slate/issues)**: Submit bugs found or log feature requests for the `slate` project.
- **[Submit Pull Requests](https://github.com/ethan05d/slate/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/ethan05d/slate/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/ethan05d/slate
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="center">
   <a href="https://github.com{/ethan05d/slate/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=ethan05d/slate">
   </a>
</p>
</details>

---

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-overview)

---
