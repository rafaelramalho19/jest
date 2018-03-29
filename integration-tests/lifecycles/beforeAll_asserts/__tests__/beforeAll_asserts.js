/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

async function asyncFunction() {
  return 1;
}

beforeAll(() => {
  expect(1).toEqual(1);
});

test('asserts', () => {
  expect.assertions(2);

  asyncFunction().then(stuff => {
    expect(stuff).toEqual(1);
  });
});
