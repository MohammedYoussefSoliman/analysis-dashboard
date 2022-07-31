# \_VOIS task 2022

Building a UI of a business website built with React, TypeScript, Redux-toolkit, TypeScript, react-hook-forms and emotion.

# Steps to produce

I initialized this project using command yarn create react-app --template typescript

Then I started working on global styles and setting up theme and app state

Using react/emotion for styling and providing the theme, and I am writing the styles using styled/emotion.

Building the store with a development logger and localstorage management for states that needed to be persisted.

Built app state using redux toolkit to manage all the applications state I divided my state into two reducers

- UI state
- Courses state

Started with the UI state I managed multilingual switch and toggling theme mode.

- included a simple theme example with colors and fonts
- added like a ui style systems for main ui elements like containers, buttons, typography as I decided to not use any ui library in this project and keep it light.

I added a routing configuration with lazy loading.

After the UI components are done, I started composing the modules or screens, I have 4 screens:

- dashboard (the one that has the filter, chart and sidebar)
- not found page
- error page
- school page (the one I am going to navigate to after clicking on a school dot)

Following this I build an async fetcher to fetch the data which is locally stored and I managed this async action using createAsyncThunk which is provided by redux tool-kit

Then I added the coursesReducer and created its actions to use on managing the data in the app.

Finally I built the chart component and enhanced some state logic.
