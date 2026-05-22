export const RoutesUrls = {
    SIGN_IN: '/sign-in',
    SIGN_UP: '/sign-up',
}

export type RouteUrl = (typeof RoutesUrls)[keyof typeof RoutesUrls];