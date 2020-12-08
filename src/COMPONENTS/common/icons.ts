import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPaperPlane,
  faEnvelope,
  faEnvelopeOpen,
  faUserAstronaut,
  faImage,
  faImages,
  faGrinHearts,
  faFolder,
  faFolderOpen,
  faLaughBeam,
  faUserTie,
  faCommentDollar,
  faCommentsDollar
} from '@fortawesome/free-solid-svg-icons';
import { IIcons } from '../types';

library.add(faPaperPlane,
  faUserAstronaut, 
  faImage,
  faImages,
  faGrinHearts,
  faFolder,
  faFolderOpen,
  faLaughBeam,
  faCommentsDollar,
  faCommentDollar
);

export const icons: IIcons = {
  mail: {static: faEnvelope, hover: faEnvelopeOpen},
  profile: {static: faUserTie, hover: faUserAstronaut},
  testimonials: { static: faLaughBeam, hover: faGrinHearts },
  gallery: {static: faImage, hover: faImages},
  work: {static: faFolder, hover: faFolderOpen},
  budget: {static: faCommentDollar, hover: faCommentsDollar}
};