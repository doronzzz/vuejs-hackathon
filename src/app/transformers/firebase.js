/* ============
 * Account Transformer
 * ============
 *
 * The transformer for the account
 */

import Transformer from './transformer';

export default class fireBaseTransformer extends Transformer {
  /**
   * Method used to transform a fetched account
   *
   * @param account The fetched account
   *
   * @returns {Object} The transformed account
   */
  static fetch(firebaseData) {
    window.firebaseData = firebaseData;
    //window.localStorage.setItem('firebaseData', JSON.stringify(firebaseData));
    return firebaseData;
  }

  /**
   * Method used to transform a send account
   *
   * @param account The account to be send
   *
   * @returns {Object} The transformed account
   */
  // static send(account) {
  //   return {
  //     email: account.email,
  //     first_name: account.firstName,
  //     last_name: account.lastName,
  //   };
  // }
}
