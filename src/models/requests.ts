import {api, apiFrases} from '~/services/api';

export const UserRequest = {
  getFrases: function (params: string, max: number) {
    const result = apiFrases.get(`?term=${params}&max=${max}`);
    return result;
  },
  getAvatars: function () {
    const result = api.get('avatars');
    return result;
  },
};
