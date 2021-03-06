import {SchematicTestRunner} from '@angular-devkit/schematics/testing';
import {join} from 'path';
import {createTestApp} from '../utils/testing';

const collectionPath = join(__dirname, '../collection.json');

describe('material-nav-schematic', () => {
  let runner: SchematicTestRunner;

  beforeEach(() => {
    runner = new SchematicTestRunner('schematics', collectionPath);
  });

  it('should remove the temp directory', () => {
    const tree = runner.runSchematic('update', {}, createTestApp());
    const files = tree.files;
    expect(files.find(file => file.includes('angular_material_schematics-'))).toBeTruthy();
  });

});
