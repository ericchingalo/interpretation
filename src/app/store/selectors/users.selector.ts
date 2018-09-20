import { createSelector } from '@ngrx/store';
import * as _ from 'lodash';

import { getRootState, State } from '../reducers';
import { getUsers } from '../reducers/users.reducer'
import { getAllInterpretations } from './interpretation.selector';
import { User } from '../../models/users.model';
import { Interpretation } from '../../models/interpretation.model';

export const getUserState = createSelector(
    getRootState, (state : State) => state.users
);

export const getAllUsers = createSelector( getUserState, getUsers)

export const rankedAuthors = createSelector(
    getAllUsers,
     getAllInterpretations, 
     (users: User[], interpretations: Interpretation) =>{
         //create a logic to pick top authors
         let rankedAuthorsList : Array<{ id : string,name : string, interpretationCounts : number}> = [ ]
        interpretations.map((interpretation: any) => {
            users.map( user => {
                if(user.id === interpretation.user.id){
                    if(rankedAuthorsList){
                        console.log('its there')
                        rankedAuthorsList.map((author: any)=> {
                            if(author && author.id){
                                if(author.id === user.id){
                                    ++author.interpretationCounts
                                }else{--=-=
                                    const newAuthor = {
                                        id : user.id,
                                        name : user.name,
                                        interpretationCounts : 1
                                    }
                                    rankedAuthorsList.push(newAuthor)
                                }
                            }
                        })
                    }else{
                        let newAuthor = {
                            id : user.id,
                            name : user.name,
                            interpretationCounts : 1
                        }
                        rankedAuthorsList.push(newAuthor)
                        console.log('new state', rankedAuthorsList)
                    }
                    }
                }) 
        } )
        return rankedAuthorsList;
     }
      )


    //   users.map( user => {
    //     if(user.id === interpretation.user.id){
    //         if(rankedAuthorsList === []){
    //             console.log('its there')
    //             rankedAuthorsList.map((author: any)=> {
    //                 if(author && author.id){
    //                     if(author.id === user.id){
    //                         ++author.interpretationCounts
    //                     }else{
    //                         const newAuthor = {
    //                             id : user.id,
    //                             name : user.name,
    //                             interpretationCounts : 1
    //                         }
    //                         rankedAuthorsList.push(newAuthor)
    //                     }
    //                 }
    //             })
    //         }else{
    //             let newAuthor = {
    //                 id : user.id,
    //                 name : user.name,
    //                 interpretationCounts : 1
    //             }
    //             rankedAuthorsList.push(newAuthor)
    //             console.log('new state', rankedAuthorsList)
    //         }
    //         }
    //     }) 