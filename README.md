# MSD JavaScript Developer
Skeleton, structure (& dummy functionality) of stuff I consider important and extensible in future.  

-> [https://msd-js-developer.vercel.app/](https://msd-js-developer.vercel.app/)
## Features
We use `TypeScript`, `Ant Design (& Icons)` and `AntV|G2`.  

I used `@berryv/g2-react` - defacto standard of `AntV|G2` wrapper for React.  

`<Statistic .../>` wraps one of 5 `Chart`s: `Area` | `Bar` | `Line` | `Pie` | `ScatterPlot`.  

`Responsive design` was important so `Menu` and `Statistic` (boxes with charts) break correctly and are usable on phone.  

## Roadmap + Discussion
If I was extending this project, I would implement following:  
- Parametrize the rest of graph components `<ChartArea .../>`, `<ChartBar .../>`, `<ChartPie .../>`, `<ChartScatterPlot .../>` thoroughly.
- Implement wrapper for original VanillaJS `AntV|G2` via useRef() - since `@berryv/g2-react` might not include all options that we might need in future for our business logic.  
- Improve styling - colors, "standard palette" (ala `createTheme{( ... )}` in MUI - [blog.stkl.cz/11-material-ui-custom-fonts/](http://blog.stkl.cz/11-material-ui-custom-fonts/) - see `screenshot` in the article)
- Re-implement backend calls via. tRPC (instead of `fetch` of HTTP REST) - for our backend needs. 

## Other Discussion
- BUSINESS LOGIC - `|Export| |Notes| |Filter|` was not integrated - I did extensive Frontend (React.js) logic - `filtering`, `downloading`, `data pipelining` in my previous job at govt. Application visitable here: [https://m17.rvvi.cz/m2/application-m2/](https://m17.rvvi.cz/m2/application-m2/)
- REMOTE PROCEDURE CALLS - `tRPC` <u>was also not</u> integrated - but I have experience implementing E2E features using `gRPC` ft. `Protocol Buffers` for Frontend(JavaScript)<->Backend(Go) communication.

## Run Locally

Run application by using these commands

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
