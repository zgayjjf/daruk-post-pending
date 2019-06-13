/**
 * @author jeffjing
 * @description index route
 */

import { BaseController, get, middleware, post } from 'daruk';

export default class Index extends BaseController {
  @get('/')
  public async index() {
    await this.ctx.render('index');
  }

  @post('/upload')
  @middleware('formidable-upload-koa')
  public async upload() {
    const file = this.ctx.req.files.img;

    console.log(file.name);
    this.ctx.body = file.name;
  }
}
