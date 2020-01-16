import {gql} from "apollo-boost";

export const CREATE_BLOG_POST = gql`
    mutation (
        $title: String!
        $body: String
        $category: [categories]
        $image: String
        $isPublished: Boolean
    ) {
        addPost (data: {
            title: $title
            body: $body
            category: $category
            image: $image
            isPublished: $isPublished
        })
    }
`;

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
