export const RoutesUrls = {
    SIGN_IN: '/sign-in',
    SIGN_UP: '/sign-up',
    HOME: '/'
}

export type RouteUrl = (typeof RoutesUrls)[keyof typeof RoutesUrls];