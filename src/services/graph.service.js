import axios from 'axios';

export default class GraphService {

  static BASE_URL = 'http://ideadeploy.space/test';

  /*
    Получение данных для графа с api
  */
  static async requestGraphData() {
    const result = await axios.get(`${this.BASE_URL}/graph.json`)
    return result.data.list
  }

}
