// Core
import { useMutation, MutationHookOptions } from '@apollo/client';

// GraphQL
import UpdateTodoSchema from '../schemas/updateMe.graphql';

// Types
import { UpdateMe, UpdateMeVariables } from '../types';

export const useUpdateMeMutation = (options?: MutationHookOptions<UpdateMe, UpdateMeVariables>) => {
    return useMutation<UpdateMe, UpdateMeVariables>(UpdateTodoSchema, {
        refetchQueries: [ 'Me' ],
        ...options,
    });
};
