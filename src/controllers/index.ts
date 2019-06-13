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
  public async upload() {
    const ctx = this.ctx
    // koa-body 挂在 request 上,formidable-upload-koa 挂在 req 上
    const file = (ctx.req.files ? ctx.req.files : ctx.request.files).img

    console.log(file.name);
    this.ctx.body = file.name;
  }

  @post('/create')
  public async create() {
    console.log(this.ctx.request.body)
    this.ctx.body = 'success'
  }
}
