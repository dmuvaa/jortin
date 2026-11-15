export type ServicePhotoFrame = {
  width: number;
  height: number;
  /** CSS object-position value */
  objectPosition: string;
  /** Extra hero crop bias when the image is portrait */
  heroPosition?: string;
};

/** Known dimensions and crop anchors for service photography. */
export const servicePhotoFrames: Record<string, ServicePhotoFrame> = {
  '/images/consultancy-design.jpg': {
    width: 1600,
    height: 1200,
    objectPosition: '50% 40%',
  },
  '/images/column-formwork.jpg': {
    width: 1200,
    height: 1600,
    objectPosition: '50% 35%',
    heroPosition: '50% 30%',
  },
  '/images/house-structure.jpg': {
    width: 2000,
    height: 1500,
    objectPosition: '50% 45%',
  },
  '/images/house-complete.jpg': {
    width: 2160,
    height: 960,
    objectPosition: '50% 55%',
  },
  '/images/house-progress.jpg': {
    width: 2160,
    height: 960,
    objectPosition: '50% 50%',
  },
  '/images/road-works.jpg': {
    width: 1600,
    height: 1200,
    objectPosition: '50% 55%',
  },
  '/images/water-tower.jpg': {
    width: 1500,
    height: 2000,
    objectPosition: '50% 22%',
    heroPosition: '50% 18%',
  },
  '/images/electrical-mechanical.jpg': {
    width: 1600,
    height: 1200,
    objectPosition: '50% 45%',
  },
  '/images/project-management.jpg': {
    width: 1600,
    height: 1200,
    objectPosition: '50% 40%',
  },
  '/images/procurement-maintenance.jpg': {
    width: 1600,
    height: 1200,
    objectPosition: '50% 50%',
  },
  '/images/consulting.jpg': {
    width: 1600,
    height: 1200,
    objectPosition: '50% 40%',
  },
};

const defaultFrame: ServicePhotoFrame = {
  width: 1600,
  height: 1200,
  objectPosition: '50% 50%',
};

export function getServicePhotoFrame(src: string): ServicePhotoFrame {
  return servicePhotoFrames[src] ?? defaultFrame;
}