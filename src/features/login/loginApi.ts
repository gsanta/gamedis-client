
export interface LoginRequestDto {
  email: string;
  password: string;
}

export interface LoginResponseDto {
  data: {
    attributes: {
      email: string;
    };
  };
}
