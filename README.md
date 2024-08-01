# MSD JavaScript Developer
Skeleton, structure (& dummy functionality) of stuff I consider important and extensible in future was created.  
## Features
We use `TypeScript`, `Ant Design (& Icons)` and `AntV|G2`.  

I used `@berryv/g2-react` - defacto standard of `AntV|G2` wrapper for React.  

`<Statistic .../>` wraps one of 5 `Chart`s: `Area` | `Bar` | `Line` | `Pie` | `ScatterPlot`.  

`Responsive design` was important so `Menu` and `Statistic` (boxes with charts) break correctly and are usable on phone.  

## Roadmap
If I was extending this project, I would implement following:  
- Parametrize the rest of graph components `<ChartArea .../>`, `<ChartBar .../>`, `<ChartPie .../>`, `<ChartScatterPlot .../>` thoroughly.
- Implement wrapper for original VanillaJS `AntV|G2` via useRef() - since `@berryv/g2-react` might not include all options that we might need in future for our business logic.  
- Improve styling - colors, "standard palette" (ala `createTheme{( ... )}` in MUI - [blog.stkl.cz/11-material-ui-custom-fonts/](http://blog.stkl.cz/11-material-ui-custom-fonts/) - see `screenshot` in the article)
- Re-implement backend calls via. tRPC (instead of `fetch` of HTTP REST) - for our backend needs. 

## Run It

Run application by using these commands

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Misc
- import problem https://medium.com/@fdikmen/fixing-could-not-find-the-module-error-in-nextjs-with-ant-design-3ae2cfe0160d