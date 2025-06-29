export default interface UserRepositoryAbstract {
  deleteById(id: string): Promise<void>;
}
