export const ImagesUrls = {
    ZUSTAND: 'https://a.storyblok.com/f/294279/d0c5d3795d/wp-zustand-react-small.png',
    VAULT_BOY_GIF: 'https://images.steamusercontent.com/ugc/516007662992150807/9FDFA5678311535A8F91ED2675ED52693389BF73/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false',
    VAULT_BOY: 'https://github.com/vaultboy24.png',
    DAVI_COTTING: 'https://github.com/davicotting.png',
    PLOTTING_VAULT_BOY: 'https://i.pinimg.com/originals/50/4d/b5/504db58dee867a562d0ebbaf7b99b335.gif',
    CODING_COVER: 'https://i.imgur.com/XWkm8rK.gif',
    NESTJS: 'https://logowik.com/content/uploads/images/nestjs-node-js1721157583.logowik.com.webp',
    TYPESCRIPT: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1280px-Typescript_logo_2020.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail',
    PINK_FLOYD_ALBUM_COVER: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/The_Dark_Side_of_the_Moon_cover.svg/960px-The_Dark_Side_of_the_Moon_cover.svg.png?_=20260303214121'
}

export type RouteUrl = (typeof ImagesUrls)[keyof typeof ImagesUrls];