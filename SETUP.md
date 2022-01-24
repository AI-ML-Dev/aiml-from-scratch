# Website Setup

We'll be using [Docusaurus](https://docusaurus.io) as our static site builder, and deploying it to the free GitHub Pages endpoint associated with this organization.

In the interests of a quickstart, we'll use the boilerplate docusaurus `classic` themed site (with built-in blog and tutorial sections) and just customize a few icons and theme properties. 

Here are the main things you need to know to create, build, modify and deploy the site.


---

## 1. Docusaurus Commmands

These are the main commands to know to create/build/preview site.

| Action / Command|  Descrioption|
|:--|:---|
| `npx create-docusaurus@latest www classic`| Scaffold _classic_ themed docusaurus site in `www/` folder|
| `cd www/` | Change working directory to `www/`|
|`npx docusaurus start` | Preview site locally - has hot reload so content updates are seen instantly |
| `npx docusaurus build` | Build production-ready version of site (in `build/`) |
|`npx docusaurus serve` | Preview production site locally - no hot reload.|

---

## 2. Docusaurus Configuration

These are the main files to know, when customizing the site. We will primarily update the first two.

| Filename |  Purpose|
|:--|:---|
| `www/docusaurus.config.js` | Primary file for configuring themes, plugins and other parameters|
|`www/sidebars.js` | Use for explicitly configuring sidebars for _Documents_.|
|`www/package.json` | NPM dependencies for building site. Updates `package-lock.json`.|
| `www/babel.config.js` | Configure Babel - a compiler for next-gen JS with presets for React (JSX, TypeScript.  |

---

## 3. Docusaurus Content

Docusaurus content can be created using [Markdown](https://daringfireball.net/projects/markdown/), or as React components using [JSX](https://reactjs.org/docs/introducing-jsx.html). React components can be embedded into Markdown using [MDX](https://mdxjs.com/).

There are three primary kinds of content:

| Filename |  Purpose|
|:--|:---|
| [Pages](https://docusaurus.io/docs/creating-pages)| These are standalone pages. Create in `src/pages/X` => access at `/X` on website. |
| [Docs](https://docusaurus.io/docs/docs-introduction)| These are _collections_ of pages organized into a hierarchy. Create in `docs/X` => access at `/docs/X` |
| [Blog](https://docusaurus.io/docs/blog) | These are pages organized into a blog - with index, tags, feed.|

---

## 4. Setup & Customize Site

 1. Scaffold the classic site & preview it.
 2. Build the default site & preview build.
 3. Remove `blog/*.md` posts, update `blog/authors.yml`. Create a new blog post - `blog/2022-01-23-hello-world.md` to initialize.
 4. Create a new page in `src/pages/about.md` for `/about`.
 5. Update `docusaurus.config.js`:
    - add About page in `navbar`
    - update title/logo in `navbar`
    - clean up `footer`.
    - edit config (title, tagline etc.)
 6. Edit `src/HomepageFeatures.js` to revise home page content
 7. Edit `src/index.js` to revise hero element.
 8. Edit `src/css/custom/css`to update theme colors.
 9. Update `static/img` _SVG_ (use [Noun Project](https://thenounproject.com),[Undraw](https://undraw.co)) - remove unused. 
 10. Update `static/img/favicon.ico` - use [Generator](https://favicon.io/) with logo icon.
 11. Remove `docs/*` to clear default tutorials. Create a new document `docs/intro.md` to init tutorials section. Then update `sidebars.js` to reflect new sidebar.

_This completes the initial customization of the website. Now let's configure it to deploy automatically to GitHub Pages on each commit._

---

## 5. Deploy site to GitHub Pages

Here are the steps for setting up the GitHub Pages automated deploy action.

| Step | Description |
|:---|:---|
| 1. [Modify docusaurus.config.js](https://docusaurus.io/docs/deployment#docusaurusconfigjs-settings)  | Add `organizationName`=user, `projectName`=repo, `deploymentBranch`=gh-pages properties. Since we'll use a custom domain, leave url at `/`. |
| 2. [Configure publishing source for GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)| Use the _Pages_ Settings to setup a default `gh-pages` branch. This publishes the page to [https://ai-ml-dev.github.io//](https://ai-ml-dev.github.io/) |
| 3. [Add CNAME for Custom Domain](https://docusaurus.io/docs/deployment#github-pages-overview) | Create `CNAME` file in static directory - move configuration back to `baseUrl:'/'` and set `url` to custom domain. Note that you need to [configure DNS](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) on your domain provider site. Don't forget to "Enable HTTPS" in Pages settings. May need to wait a while before domain is activated!|
| 4. [Setup GitHub Actions for auto-deploy](https://docusaurus.io/docs/deployment#triggering-deployment-with-github-actions) | We want this to auto-deploy build to gh-pages when new commit is made to `main/`. Follow the directions for "Same" repo - add `deploy.yml` and `test-deploy.yml` to `.github/workflows` -- commit changes! I used `www/**` for paths) and `npm` for build)  |
| 5. [Visit Actions Dashboard](https://github.com/nitya/docusaurus-demo/actions) | Commits should trigger action - verify that build/deploy works. |

---


