import {gql} from "apollo-boost";

// MUTATIONS
export const CREATE_BLOG_POST = gql`
    mutation (
        $id: ID
        $title: String!
        $body: String
        $category: [categories]
        $image: String
        $isPublished: Boolean
    ) {
        addPost (data: {
            id: $id
            title: $title
            body: $body
            category: $category
            image: $image
            isPublished: $isPublished
        })
    }
`;

export const DELETE_POST = gql`
    mutation ($id: ID!) {
        deletePost (id: $id)
    }
`;

export const UPDATE_POST_STATUS = gql`
    mutation ($id: ID!) {
        changePublishState(id: $id)
    }
`;

// QUERIES
export const GET_ALL_BLOG_POSTS = gql`
    query {
        getUserPosts {
            id
            title
            body
            image
            isPublished
            category
            createdAt
            likes
            author {
                username
            }
        }
    }
`;

export const GET_ALL_PUBLISHED_BLOG_POST = gql`
    query {
        getAllUserPublishedPosts {
            id
            title
            body
            image
            isPublished
            createdAt
            category
        }
    }
`;
