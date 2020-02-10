# Full Stack Project

- [Full Stack Project](#Full-Stack-Project)
  - [Overview](#Overview)
    <!-- - [Permissions](#Permissions) -->
  - [MVP](#MVP)
    - [MVP Goals](#MVP-Goals)
    - [MVP Libraries](#MVP-Libraries)
    - [MVP Client (Front End)](#MVP-Client-Front-End)
      - [Wireframes](#Wireframes)
      - [Component Hierarchy](#Component-Hierarchy)
      - [Component Breakdown](#Component-Breakdown)
      - [Component Estimates](#Component-Estimates)
    - [MVP Server (Back End)](#MVP-Server-Back-End)
      - [ERD Model](#ERD-Model)
      - [Data Heirarchy](#Data-Heirarchy)
  - [Post-MVP](#Post-MVP)
  - [Project Delivery](#Project-Delivery)
  - [Code Showcase](#Code-Showcase)
  - [Code Issues & Resolutions](#Code-Issues--Resolutions)


<br>

## Overview


_**Collab** is an web application that works off the idea that the startup space is really network-focused, but there isn't really an app out there that digitally facilitates networking for their community. Meetups exist, but are in person. If you have a business, (ie. a floral service that creates bouquets (like UrbanStems), and want or need to outsource certain key aspects of the business (ie. delivery), you can use the app to find another startup in the network to assist you (ie. a company that provides vans/delivery services). After connecting, either business must leave a review on their profile describing their mutual experience. The objective is to support other startups in the community._

<!-- ### Permissions

Digital assets used with full licensing and permission from [Death to Stock Photo](), [Freepik](), and [Unsplash](). Custom digital design and branding by John Lansing. Digital assets stored locally and on [Imgur](). -->

<br>

## MVP

_The **Collab** MVP consists of an application that allows you to create a profile with a section for other users to comment on._

<br>

### MVP Goals

- _Company Profile where companies can list:_
  - _Company Name_
  - _A status (ie. - We're in our first round of funding! Let us know if you have any tips.)_
  - _An "About Us" Section_
  - _A "What Makes Us Unique?" Section_
  - _A "Connect" Button that links to email._
  - _A "Category" section (ie. software, publishing, photography etc.)._
  - _A link to their company website_
- _A search bar where users can search for companies through name and category._
- _An explore page that randomly shows companies in the platform._ 


<br>

### MVP Libraries

> Use this section to list all supporting libraries and dependencies, and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _Using for Front-End_ |
|   React Router   | _Using for navigation between components._ |
|     Rails        | _Using for backend._ |

<br>

### MVP Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.

![Wireframes](https://wireframe.cc/pro/pp/db51570df312203)

- Wireframes

#### Component Hierarchy

``` structure

src
|__ assets/
      |__ Images
|__ components/
      |__ Header.js
      |__ Navigation.js
      |__ Login.js
      |__ Register.js
      |__ Explore.js
      |__ MyProfile.js
      |__ UserProfile.js
|__ services/
      |__ ApiHelper.js

```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the logo and tagline._               |
|  Navigation  | functional |   n   |   y   | _The navigation will provide a link to each of the pages._       |
|   Explore    |   class    |   y   |   y   | _The Explore page will render random company profiles in the system._      |
| Login        | functional |   n   |   y   | _The Login will allow users to access the website._                 |
| Register        | functional |   n   |   y   | _The Register will allow users to create a profile the website._                 |
| MyProfile        | functional |   y   |   y   | _MyProfile will allow users to access their own profile._                 |
| UserProfile        | functional |   y   |   y   | _UserProfile will allow users to access other profiles on the system._                 |


#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Header              |    L     |     .5 hr      |     2 hrs     |    .5 hr    |
| Navigation          |    H     |     3 hrs      |      TBD      |     TBD     |
| Explore             |    H     |     3 hrs      |      TBD      |     TBD     |
| Login               |    H     |     3 hrs      |      TBD      |     TBD     |
| Register            |    H     |     3 hrs      |      TBD      |     TBD     |
| MyProfile           |    H     |     3 hrs      |      TBD      |     TBD     |
| Backend             |    H     |     6 hrs      |      TBD      |     TBD     |
| TOTAL               |          |     21 hrs     |      TBD      |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### MVP Server (Back End)

#### ERD Model

> https://www.lucidchart.com/invitations/accept/2ea8a5da-2524-4fb9-96d3-4bcb9d0bbf5e

#### Data Heirarchy

> Use this section to display the database, table, and attribute heirarchy.

``` structure

database_db
|__ users/
|__ companies/
|__ comments/

```

<br>

***

## Post-MVP

- _Personal User profiles affiliated with their company (one user can have multiple companies)._
- _A follow button to follow company statuses_
- _Connect Button that links to a chatroom so you can directly DM users through the app._
- _Mandatory commenting after the connect button is clicked 5 times._
- _A "My Connections" page and a button to add/remove connections on both a company profile and your connections page._


***

## Project Delivery

> The Delivery section should be expanded and revised as you work on your project.

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution, if you'd like.

***