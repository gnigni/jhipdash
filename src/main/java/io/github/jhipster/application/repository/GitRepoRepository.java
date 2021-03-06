package io.github.jhipster.application.repository;

import io.github.jhipster.application.domain.GitRepo;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the GitRepo entity.
 */
@SuppressWarnings("unused")
@Repository
public interface GitRepoRepository extends JpaRepository<GitRepo, Long> {

}
