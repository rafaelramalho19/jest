/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */
'use strict';

const runJest = require('../runJest');

test('suite with invalid assertions in beforeAll', () => {
  const {stderr, status} = runJest('lifecycles/beforeAll_asserts');

  expect(status).toBe(1);
  expect(stderr).toMatch(/beforeAll just failed!/);
});

test('suite with invalid assertions in afterAll', () => {
  const {stderr, status} = runJest('lifecycles/afterAll_fail');

  expect(status).toBe(1);
  expect(stderr).toMatch(/afterAll just failed!/);
});
