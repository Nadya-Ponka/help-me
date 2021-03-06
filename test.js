const assert = require('assert');
Object.freeze(assert);

const count = require('./src/index');

describe('Help me', () => {
 it('0', () => {
    const result = count('1', [[2, 1], [3, 1]]);
    assert.equal(result, 2);
  });

  it('1', () => {
    const result = count('01', [[3, 2], [5, 1]]);
    assert.equal(result, 15);
  });

  it('2', () => {
    const result = count('1011', [[3, 1000000000]]);
    assert.equal(result, 411979884);
  });

  it('3', () => {
    const result = count('0', [[3, 1], [2, 1]]);
    assert.equal(result, 4);
  });

  it('4', () => {
    const result = count('01', [[3, 3]]);
    assert.equal(result, 9);
  });

  it('5', () => {
    const result = count('01', [[3, 1], [2, 1], [23, 1], [29, 1], [11, 1]]);
    assert.equal(result, 12320);
  });

  it('6', () => {
    const result = count('0', [[2, 1], [19, 1]]);
    assert.equal(result, 20);
  });

  it('7', () => {
    const result = count('11', [[5, 1], [23, 1], [19, 1]]);
    assert.equal(result, 1071);
  });

   it('8', () => {
    const result = count('111100101000', [[13, 1], [3, 1], [17, 1], [11, 1], [2, 1], [23, 1], [29, 1], [19, 1]]);
    assert.equal(result, 0);
  });

 it('9', () => {
    const result = count('0000000010', [[2, 855366762], [7, 362515429], [11, 957405925], [5, 533046588], [43, 553266268], [41, 817293275], [29, 917192154], [37, 757232591], [3, 104861972], [19, 141556393], [17, 410255510], [31, 91841614], [47, 186486046], [13, 788862284], [23, 603032550]]);
    assert.equal(result, 72252700);
  });

  it('10', () => {
    const result = count('0000000000000000000000000000000000000000', [
      [13, 502438118],
      [19, 80934364],
      [2, 489113000],
      [11, 633997469],
      [23, 607172440],
      [7, 185766494],
      [29, 972668273],
      [5, 183125343],
      [17, 710174175],
      [3, 950315605],
    ]);
    assert.equal(result, 184150446);
  });
  
  it('11', () => {
    const result = count('1', [
      [11, 1],
      [5, 1],
      [17, 1],
      [23, 1],
      [13, 1],
    ]);
    assert.equal(result, 168960);
  });

  it('12', () => {
    const result = count('11', [
      [3, 1],
    ]);
    assert.equal(result, 1);
  });

  it('13', () => {
    const result = count('1', [
      [11, 1],
      [7, 1],
      [29, 1],
      [2, 1],
      [23, 1],
      [3, 1],
      [19, 1],
    ]);
    assert.equal(result, 1330560);
  });

   it('14', () => {
    const result = count('1', [
      [11, 1],
      [13, 1],
      [23, 1],
      [19, 1],
      [2, 1],
      [3, 1],
      [7, 1],
      [17, 1],
      [29, 1],
    ]);
    assert.equal(result, 255467520);
  });

 it('15', () => {
    const result = count('0000000000000000000000000000000000000000', [
      [17, 128864793],
      [2, 856087293],
      [11, 955344281],
      [31, 288467373],
      [19, 237462831],
      [37, 734329757],
      [7, 277327578],
      [13, 594729658],
      [5, 631092044],
      [3, 259850059],
      [29, 619887325],
      [23, 481661362],
    ]);
    assert.equal(result, 534845841);
  });

  it('16', () => {
    const result = count('0000000000100000000000000000000000000000', [
      [2, 8939193],
      [37, 204376339],
      [17, 142301565],
      [13, 724041452],
      [5, 519881209],
      [19, 563054870],
      [3, 513627108],
      [23, 971585631],
      [7, 251703809],
      [31, 682238347],
      [11, 531390935],
      [29, 150098810],
    ]);
    assert.equal(result, 500432525);
  });
});
