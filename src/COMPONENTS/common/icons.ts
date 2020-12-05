import { library, IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { 
    faPaperPlane,
    faUserAstronaut,
    faImages,
    faGrinHearts
 } from '@fortawesome/free-solid-svg-icons';

library.add(faPaperPlane, faUserAstronaut, faGrinHearts);

interface IIcons {
    [key: string]: IconDefinition;
}

export const icons: IIcons = {
    mail: faPaperPlane,
    profile: faUserAstronaut,
    gallery: faImages,
    testimonials: faGrinHearts
};