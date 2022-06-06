// service로 보내 받을 클래스(인터페이스)를 export
// 실제 데이터베이스의 모델을 여기 작성!
export class Movie {
  id: number;
  title: string;
  year: number;
  genres: string[];
}
