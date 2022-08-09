import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { TesteGqlComponent } from './teste-gql/teste-gql.component';
import { CommonModule } from '@angular/common';

const uri = environment.GRAPHQL_URI;
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  imports: [HttpClientModule, CommonModule],
  exports: [ApolloModule, TesteGqlComponent],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
  declarations: [
    TesteGqlComponent
  ],
})
export class GraphQLModule {}
