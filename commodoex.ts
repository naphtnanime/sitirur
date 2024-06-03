class StudentClass {
  private _student: string[];

  public set student(data: string[]) {
    if (Array.isArray(data) && data.every(item => typeof item === 'string')) {
      this._student = data;
    } else {
      throw new Error('Invalid data: Setter expects an array of strings.');
    }
  }

  // Assuming there's a getter to retrieve the student data
  public get student(): string[] {
    return this._student;
  }
}
