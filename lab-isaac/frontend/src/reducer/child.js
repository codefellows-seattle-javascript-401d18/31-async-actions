let validate = payload => {
  if(!payload._id) throw new Error('VALIDATION ERROR: child must have an id');
  if(!payload.name) throw new Error('VALIDATION ERROR: child must have a name');
};

export default (state=[], action) => {
  let {type, payload} = action;

  console.log('__TYPE__', type);
  console.log('__PAYLOAD__', payload);

  switch (type) {
  case 'CHILD_SET': return payload;
  case 'CHILD_CREATE': validate(payload);
    return [payload, ...state];
  case 'CHILD_UPDATE': validate(payload);
    return state.map(item => item._id === payload._id ? payload : item);
  case 'CHILD_DELETE': validate(payload);
    return state.filter(item => item._id !== payload._id);
  default:
    return state;
  }
};
