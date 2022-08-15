# AngularApolloGraphqlTemplate

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

## Install dependencies
Use `npm i --force` since there are some depencies issues between `apollo-angular@3.0.1` et `angular 14`

## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:4200/`. The GraphQL services and schemas will automatically generated if you change any .graphql file.

## Create GraphQL query or mutation service

1. Create a .graphql file in the src folder or subdirectory
2. Put into this file a graphql query or mutation Ex: Have a look at the `src/app/graphql/teste-gql/rate.graphql`. 
3. Save the folder
4. If you did not launch the program with the `npm run dev` command then run `npm run graphql-gen` to generate the service.
5. See how to use the new generated service in `src/app/graphql/teste-gql/teste-gql.component.ts`

## Further help

To get more help on the template contact me `genieouzog@gmail.com` or see [link](https://www.graphql-code-generator.com/docs/getting-started/installation).
