FROM openjdk:11-jre-slim

# By default it is 100, which is insufficient for some services, increase it to 250. Units are megabytes.
ENV GC_MAX_METASPACE_SIZE=250

# Refer to https://access.redhat.com/documentation/en-us/red_hat_jboss_middleware_for_openshift/3/html-single/red_hat_single_sign-on_for_openshift/index#configuration_environment_variables
ENV JAVA_MAX_MEM_RATIO=0
ENV JAVA_OPTS_APPEND -Dfile.encoding=UTF-8 -Dsun.jnu.encoding=UTF-8

RUN ls
COPY ./backend/build/libs/*.jar ./app.jar

RUN groupadd -r gruppe && useradd --no-log-init -r -g gruppe benutzer
USER benutzer

EXPOSE 8080
CMD ["java", "-jar", "app.jar"]