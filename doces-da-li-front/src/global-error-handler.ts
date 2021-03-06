import { ErrorHandler, Injectable, Injector, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

/**
 * Handle any errors thrown by Angular application
 */
@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  constructor(@Inject(Injector) private readonly injector: Injector) {
    super();
  }

  handleError(error) {
    console.log('Handling error: ' + error);

    this.toastrService.error('Email ou senha está incorreto', 'Erro!', {
      onActivateTick: true,
    });

    super.handleError(error);
  }

  /**
   * Need to get ToastrService from injector rather than constructor injection to avoid cyclic dependency error
   * @returns {}
   */
  private get toastrService(): ToastrService {
    return this.injector.get(ToastrService);
  }
}
