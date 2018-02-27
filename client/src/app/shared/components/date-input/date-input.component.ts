import { Component, OnInit, Input, forwardRef, ExistingProvider } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  Validator,
  AbstractControl,
  FormControl,
  ValidationErrors,
  NG_VALIDATORS
} from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true
    }]
})
export class DateInputComponent implements ControlValueAccessor {

  private value: string;
  private locale: string = 'en-US';

  public constructor() { }

  public onChange() { }

  public onBlur() {
    this.onTouched();
  }

  public onChangeValue: (value: any) => void = () => { };

  public onTouched: () => any = () => { };

  public writeValue(value: Date): void {
    this.value = new DatePipe(this.locale).transform(value, 'dd/MM/yyyy');
  }

  public registerOnChange(fn: any): void {
    this.onChangeValue = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void { }
}
