const Mock = require("mockjs");

export const uid = '@integer(60, 1000)';

export const negative = '@integer(-1000, 0)';

export const random = '@integer(-1000, 1000)';

export const str = '@last(11)';

export const account = `${'@integer(10000, 100000)'}`

export const img = '@img(64x64,@color,avatar)'

export const bool = '@boolean()'