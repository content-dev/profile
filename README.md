<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">Software Developer's Portfolio</h1>

  <p align="center">
    It is a personal static website/portfolio template hosted with GitHub Pages, built to showcase my recent projects. Site URL / Demo: 
    <a href="https://content-dev.github.io/profile">content-dev.github.io/profile</a>
    <br />
    <br />
    <a href="https://content-dev.github.io">About Me</a>
  </p>
</p>

[![Site preview](/public/social-image.png)](https://content-dev.github.io/profile)

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Technology Stack](#technology-stack)
- [Structure](#structure)
- [Sharing](#sharing)
- [Prerequisites](#prerequisites)
- [Setup And Deployment](#setup-and-deployment)


## Technology Stack 

Dependencies defined in package.json:

[Reactjs](https://reactjs.org/)
| [Bootstrap](https://getbootstrap.com/)
| [Typist](https://github.com/jstejada/react-typist)
| [GitHub API](https://developer.github.com/v3/repos/)
| [Instagram API](https://www.instagram.com/developer/embedding/)

## Structure 

- Navigation bar (optional)
- Body
  - Name | Profession
  - Contact / Follow / Find me / Facebook / LinkedIn / GitHub / Instagram / Email / CodePen
  - Resume | About me
- About Me
  - Display picture (optional)
  - About myself, my Interests, Goals and Hobbies
  - Things I'm good at (Skills)
- Experience
  - All companies where I've worked  
- Recent Projects (using GitHub API) (optional)
- Skills (optional)
  - Technical Skills
  - Soft Skills
- Videos (optional)
  - Published videos  
- Footer
  - Footer Note (optional)

## Sharing

Project is open source. Feel free to make your own version. All you need to do is to fork this repository, edit [src/editable-stuff/config.js](./src/editable-stuff/config.js) and add resume.

## Prerequisites

You should have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed on your PC. You should also own a GitHub account.

## Setup And Deployment

1. To Get Started, Fork this repository to your GitHub account:
2. Clone the forked repo from your account using:

   ```bash
     git clone https://github.com/<your-username>/<repo_name>.git
   ```

3. Open in editor and edit [src/editable-stuff/config.js](./src/editable-stuff/config.js) file.

4. Edit [title](./public/index.html#L34) and meta [description](./public/index.html#L13) in [public/index.html](./public/index.html).
5. Change URL in [package.json](./package.json) file:

   ```json
    "homepage": "https://<your-username>.github.io/<repo_name>"
   ```

   Or for deployment at custom domain, refer [create-react-app.dev](https://create-react-app.dev/docs/deployment/#step-1-add-homepage-to-packagejson)

6. After editing run the following bash commands:

   ```bash
   npm install
   npm start
   ```

7. To deploy website, run:

   ```bash
    npm run build
    npm run deploy
   ```

8. Congrats your site is up and running. To see it live, visit:

   ```https
     https://<your-username>.github.io/<repo_name>
   ```

9. To change the thumbnail image:

    - Navigate to the "public" folder.  
    - There you will see "social-image.png".  
    - Delete it. 
    - Take a screenshot of your version and rename it "social-image.png" and place it there.  
    
Next time if you make changes, repeat from step 8.
