# My App

A modern web application built with:

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/chomii/my-shop.git
cd my-shop

# Install dependencies
npm install

npm run dev
```

## Branching Strategy

We use [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/) for managing code changes.

- **main**: Stable, production-ready code.
- **develop**: Latest development changes.
- **feature/**: New features (branch off develop).
- **release/**: Release preparation (branch off develop).
- **hotfix/**: Urgent fixes (branch off main).

### Workflow

1. Create a feature branch from develop:  
   `git checkout develop && git checkout -b feature/my-feature`
2. Merge feature into develop when done.
3. Create release branch from develop for production releases.
4. Merge release into main and develop.
5. Create hotfix branch from main for urgent fixes.
