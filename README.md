# Old Redux Vs Redux Toolkit

|Old Redux     |      Redux toolkit |
| --------     | ------- |
| You have to configure /redux devtool extension explicitly (Manually)  | It provides automatic support for Redux Devtools Extension.    |
| We need to manually handle and change the state immutably. | It provides the support for Immer.js library which automatically changes the code immutably.    |
| Configuring a Redux store is too complicated.    | Configuring a Redux store is much easier and built in support of middleware    |
| Need to create reducers and creators seperately - lots of boilerplate code    | A createSlice() function that comes in handy to replace create action and create Reducer functions with single function.    |
| Lots of code to write to handle asynchronous requests and handlig error was also manual.    | createAsyncThunk to make asynchronous requests.    |
| Class based implementation    | Functional Implementation with typescript and supports of hooks.    |

Source: https://www.youtube.com/watch?v=A_vRvDAZuOo
