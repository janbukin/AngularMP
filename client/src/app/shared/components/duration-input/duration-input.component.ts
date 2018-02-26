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
import { DurationPipe } from 'app/shared/pipes';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationInputComponent),
      multi: true
    }]
})
export class DurationInputComponent implements ControlValueAccessor {

  private previousValue: string;
  private value: string;

  public constructor() { }

  public onChange() {
    this.sendFromValueUpdate();
  }

  public onBlur() {
    this.onTouched();
  }

  public onKeyPress(event) {
    const pattern = this.value.length > 0 ? /[0-9]/ : /[1-9]/;
    if (this.value.length > 2) {
      event.preventDefault();
      return;
    }
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
      return;
    }
  }

  public onPaste(event) {
    event.preventDefault();
  }

  public onDrop(event) {
    event.preventDefault();
  }

  public onUpClick() {
    this.value = (+this.value + 1).toString();
    this.sendFromValueUpdate();
  }

  public onDownClick() {
    const number = +this.value;
    if (number > 0) {
      this.value = (number - 1).toString();
    }
    this.sendFromValueUpdate();
  }

  public registerOnValidatorChange?(fn: () => void): void { }

  public onChangeValue: (value: any) => void = () => { };

  public onTouched: () => any = () => { };

  public writeValue(value: number): void {
    this.value = String(value);
  }

  public registerOnChange(fn: any): void {
    this.onChangeValue = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState?(isDisabled: boolean): void { }

  private sendFromValueUpdate(): void {
    if (this.previousValue === this.value) {
      return;
    }
    this.previousValue = this.value;
    this.onChangeValue(this.value === '' ? null : +this.value);
  }
}
