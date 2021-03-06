// @flow

export interface SocialNetworkType {
  type: 'vk' | 'fb' | 'twitter' | 'github' | 'site';
  link: string;
}

export type SpeakerType = {
  fields: {
    slug: string,
  },
  title: string,
  avatar: ?string,
  jobTitle: ?string,
  organization: ?string,
  socialNetworks: Array<SocialNetworkType>,
  talks: Array<TalkType>,
}

export type RawSpeakerType = {
  title: string,
  avatar: ?string,
  jobTitle: ?string,
  organization: ?string,
  socialNetworks: Array<SocialNetworkType>,

  fields: {
    slug: string,
    talks: Array<TalkType>,
  },
}

export interface TalkType {
  title: string;
  description: string;

  tags: string[];

  links: {
    video: string | null,
    presentation: string | null,
  } | null;

  event: {
    slug: string,
    date: string,
  };

  speaker: SpeakerType;
}

export type VkPhotoType =
  | 's'
  | 'm'
  | 'x'
  | 'o'
  | 'p'
  | 'q'
  | 'r'
  | 'y'
  | 'z'
  | 'w'

export let typesOrderedBySize = [
  's',
  'm',
  'x',
  'o',
  'p',
  'q',
  'r',
  'y',
  'z',
  'w',
]

export type VkPhoto = {
  type: VkPhotoType,
  url: string,
  width: number,
  height: number,
}

export type VkPhotoGroup = {
  sizes: VkPhoto[],
}

export type EventType = {
  fields: {
    slug: string,
    vkAlbum: ?{
      title: string,
      photos: VkPhotoGroup[],
    },
  },
  title: string,
  description: string,
  address: string,
  date: string,
  socialNetworks: SocialNetworkType[],
  talks: TalkType[],
}

export type RawEventType = {
  fields: {
    slug: string,
    talks: TalkType[],
    vkAlbum: ?{
      title: string,
      photos: VkPhotoGroup[],
    },
  },

  title: string,
  description: string,
  address: string,
  date: string,
  socialNetworks: SocialNetworkType[],
}
