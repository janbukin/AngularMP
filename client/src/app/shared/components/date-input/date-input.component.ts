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

  public value: string;
  public locale: string = 'en-US';

  get currentDateFormatted(): string {
    return new DatePipe(this.locale).transform(new Date(), 'yyyy/MM/dd');
  }

  public constructor() { }

  public onChange() {
    this.notifyParent();
  }

  public onDoubleClick() {
    this.value = this.currentDateFormatted;
    this.notifyParent();
  }

  public onBlur() {
    this.onTouched();
  }

  public onChangeValue: (value: any) => void = () => { };

  public onTouched: () => any = () => { };

  public writeValue(value: Date): void {
    this.value = new DatePipe(this.locale).transform(value, 'yyyy/MM/dd');
  }

  public registerOnChange(fn: any): void {
    this.onChangeValue = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void { }

  private notifyParent() {
    this.onChangeValue(this.parseDate(this.value));
  }

  private parseDate(value: string): Date {
    const pattern = /(1|2)\d\d\d(-|\/)\d\d?(-|\/)(0|1|2|3)\d?/;
    if (!pattern.test(value)) {
      return null;
    }
    const timestamp = Date.parse(value);
    if (isNaN(timestamp)) {
      return null;
    }
    return new Date(timestamp);
  }
}
